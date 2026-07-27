import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia-guide');
}

export default function NoResetNepreniaGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia-guide" />;
}
