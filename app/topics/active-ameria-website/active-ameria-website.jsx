import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ameria-website');
}

export default function ActiveAmeriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-ameria-website" />;
}
