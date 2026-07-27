import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiara-website');
}

export default function NewSeasonTibiaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiara-website" />;
}
