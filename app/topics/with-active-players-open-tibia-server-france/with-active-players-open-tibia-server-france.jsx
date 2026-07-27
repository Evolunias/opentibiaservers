import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-open-tibia-server-france');
}

export default function WithActivePlayersOpenTibiaServerFranceKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-open-tibia-server-france" />;
}
