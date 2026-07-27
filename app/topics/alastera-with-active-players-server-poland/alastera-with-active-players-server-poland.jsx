import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-active-players-server-poland');
}

export default function AlasteraWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-active-players-server-poland" />;
}
