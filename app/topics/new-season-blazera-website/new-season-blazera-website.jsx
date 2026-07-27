import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera-website');
}

export default function NewSeasonBlazeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera-website" />;
}
