import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot-guide');
}

export default function CustomNoxiousotGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot-guide" />;
}
