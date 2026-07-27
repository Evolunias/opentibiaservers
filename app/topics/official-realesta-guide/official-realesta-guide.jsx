import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realesta-guide');
}

export default function OfficialRealestaGuideKeywordPage() {
  return <StaticKeywordPage slug="official-realesta-guide" />;
}
