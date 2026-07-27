import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ameria-website');
}

export default function BestAmeriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-ameria-website" />;
}
