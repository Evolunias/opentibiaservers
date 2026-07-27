import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-active-players-server-germany');
}

export default function ShadowcoresWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-active-players-server-germany" />;
}
