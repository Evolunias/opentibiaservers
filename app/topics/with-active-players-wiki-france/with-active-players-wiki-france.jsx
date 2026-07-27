import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-wiki-france');
}

export default function WithActivePlayersWikiFranceKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-wiki-france" />;
}
