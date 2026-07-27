import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-54-evo-server');
}

export default function Realera854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-54-evo-server" />;
}
