import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria-website');
}

export default function LowrateAmeriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria-website" />;
}
