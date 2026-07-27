import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle-guide');
}

export default function OfficialMiracleGuideKeywordPage() {
  return <StaticKeywordPage slug="official-miracle-guide" />;
}
