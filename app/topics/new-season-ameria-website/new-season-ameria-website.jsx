import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ameria-website');
}

export default function NewSeasonAmeriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-ameria-website" />;
}
