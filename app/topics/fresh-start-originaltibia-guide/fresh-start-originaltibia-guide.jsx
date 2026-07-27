import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-originaltibia-guide');
}

export default function FreshStartOriginaltibiaGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-originaltibia-guide" />;
}
