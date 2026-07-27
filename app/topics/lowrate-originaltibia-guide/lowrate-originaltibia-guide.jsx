import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-originaltibia-guide');
}

export default function LowrateOriginaltibiaGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-originaltibia-guide" />;
}
