import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-1-evo-server');
}

export default function Sabrehaven81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-1-evo-server" />;
}
