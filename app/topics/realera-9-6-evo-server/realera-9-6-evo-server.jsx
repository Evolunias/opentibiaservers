import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-9-6-evo-server');
}

export default function Realera96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realera-9-6-evo-server" />;
}
