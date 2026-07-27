import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ameria-website');
}

export default function TopAmeriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-ameria-website" />;
}
