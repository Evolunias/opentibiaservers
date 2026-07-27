import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classick-drakoria-website');
}

export default function NewSeasonClassickDrakoriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-classick-drakoria-website" />;
}
