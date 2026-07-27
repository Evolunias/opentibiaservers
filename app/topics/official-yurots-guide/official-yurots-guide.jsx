import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots-guide');
}

export default function OfficialYurotsGuideKeywordPage() {
  return <StaticKeywordPage slug="official-yurots-guide" />;
}
