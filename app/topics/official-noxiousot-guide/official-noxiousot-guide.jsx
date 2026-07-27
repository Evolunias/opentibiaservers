import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-noxiousot-guide');
}

export default function OfficialNoxiousotGuideKeywordPage() {
  return <StaticKeywordPage slug="official-noxiousot-guide" />;
}
