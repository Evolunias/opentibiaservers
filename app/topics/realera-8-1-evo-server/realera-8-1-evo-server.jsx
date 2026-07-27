import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-1-evo-server');
}

export default function Realera81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-1-evo-server" />;
}
