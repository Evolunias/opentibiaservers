import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria-website');
}

export default function CustomAmeriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria-website" />;
}
