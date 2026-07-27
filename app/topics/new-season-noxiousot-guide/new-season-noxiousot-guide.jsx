import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-noxiousot-guide');
}

export default function NewSeasonNoxiousotGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-noxiousot-guide" />;
}
