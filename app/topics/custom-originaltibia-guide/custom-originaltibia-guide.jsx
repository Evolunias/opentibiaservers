import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia-guide');
}

export default function CustomOriginaltibiaGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia-guide" />;
}
