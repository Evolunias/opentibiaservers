import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eldera-guide');
}

export default function OfficialElderaGuideKeywordPage() {
  return <StaticKeywordPage slug="official-eldera-guide" />;
}
