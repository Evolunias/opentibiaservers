import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia-guide');
}

export default function ActiveNepreniaGuideKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia-guide" />;
}
