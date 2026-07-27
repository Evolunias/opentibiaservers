import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-noxiousot-guide');
}

export default function FreshStartNoxiousotGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-noxiousot-guide" />;
}
