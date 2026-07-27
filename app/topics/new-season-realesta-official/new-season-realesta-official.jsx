import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realesta-official');
}

export default function NewSeasonRealestaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-realesta-official" />;
}
