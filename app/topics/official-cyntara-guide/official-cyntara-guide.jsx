import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara-guide');
}

export default function OfficialCyntaraGuideKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara-guide" />;
}
