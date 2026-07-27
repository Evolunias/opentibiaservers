import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-originaltibia-website');
}

export default function NewSeasonOriginaltibiaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-originaltibia-website" />;
}
