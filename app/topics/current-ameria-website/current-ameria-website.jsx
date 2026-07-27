import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ameria-website');
}

export default function CurrentAmeriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-ameria-website" />;
}
