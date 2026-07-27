import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia-guide');
}

export default function ActiveOriginaltibiaGuideKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia-guide" />;
}
