import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-active-players-server-france');
}

export default function UnlineWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="unline-with-active-players-server-france" />;
}
