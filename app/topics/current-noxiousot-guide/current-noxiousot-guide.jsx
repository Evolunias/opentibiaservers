import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-noxiousot-guide');
}

export default function CurrentNoxiousotGuideKeywordPage() {
  return <StaticKeywordPage slug="current-noxiousot-guide" />;
}
