import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-noxiousot-guide');
}

export default function PopularNoxiousotGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-noxiousot-guide" />;
}
