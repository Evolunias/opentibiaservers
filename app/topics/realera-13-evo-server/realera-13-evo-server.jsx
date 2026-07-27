import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-13-evo-server');
}

export default function Realera13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realera-13-evo-server" />;
}
