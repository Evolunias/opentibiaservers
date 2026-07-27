import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-aurera-global-guide');
}

export default function OfficialAureraGlobalGuideKeywordPage() {
  return <StaticKeywordPage slug="official-aurera-global-guide" />;
}
