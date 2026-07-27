import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-medivia-website');
}

export default function NewSeasonMediviaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-medivia-website" />;
}
