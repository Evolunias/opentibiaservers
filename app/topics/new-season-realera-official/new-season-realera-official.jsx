import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realera-official');
}

export default function NewSeasonRealeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-realera-official" />;
}
