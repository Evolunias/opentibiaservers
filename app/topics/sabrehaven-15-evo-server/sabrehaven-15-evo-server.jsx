import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-15-evo-server');
}

export default function Sabrehaven15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-15-evo-server" />;
}
