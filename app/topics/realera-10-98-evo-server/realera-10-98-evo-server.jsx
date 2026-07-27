import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-98-evo-server');
}

export default function Realera1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-98-evo-server" />;
}
