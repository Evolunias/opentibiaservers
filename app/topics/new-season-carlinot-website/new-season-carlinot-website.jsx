import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-carlinot-website');
}

export default function NewSeasonCarlinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-carlinot-website" />;
}
