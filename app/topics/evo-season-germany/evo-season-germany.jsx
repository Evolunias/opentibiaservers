import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-season-germany');
}

export default function EvoSeasonGermanyKeywordPage() {
  return <StaticKeywordPage slug="evo-season-germany" />;
}
