import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-6-evo-server');
}

export default function Sabrehaven86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-6-evo-server" />;
}
