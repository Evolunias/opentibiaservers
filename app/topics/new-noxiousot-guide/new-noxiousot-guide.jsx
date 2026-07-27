import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot-guide');
}

export default function NewNoxiousotGuideKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot-guide" />;
}
