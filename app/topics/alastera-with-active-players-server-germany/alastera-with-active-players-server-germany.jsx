import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-active-players-server-germany');
}

export default function AlasteraWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-active-players-server-germany" />;
}
