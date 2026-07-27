import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-guide');
}

export default function OriginaltibiaGuideKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-guide" />;
}
