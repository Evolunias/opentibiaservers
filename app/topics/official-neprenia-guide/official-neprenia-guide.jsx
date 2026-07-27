import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-neprenia-guide');
}

export default function OfficialNepreniaGuideKeywordPage() {
  return <StaticKeywordPage slug="official-neprenia-guide" />;
}
