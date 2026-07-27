import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-guide');
}

export default function NoxiousotGuideKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-guide" />;
}
