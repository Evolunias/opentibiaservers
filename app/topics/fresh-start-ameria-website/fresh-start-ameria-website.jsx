import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ameria-website');
}

export default function FreshStartAmeriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ameria-website" />;
}
