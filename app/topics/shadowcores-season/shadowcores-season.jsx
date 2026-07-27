import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-season');
}

export default function ShadowcoresSeasonKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-season" />;
}
