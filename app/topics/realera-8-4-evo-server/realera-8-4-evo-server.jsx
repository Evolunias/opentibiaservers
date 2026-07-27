import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-4-evo-server');
}

export default function Realera84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-4-evo-server" />;
}
