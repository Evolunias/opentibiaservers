import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thaisot-website');
}

export default function NewSeasonThaisotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-thaisot-website" />;
}
