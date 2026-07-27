import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-season-germany');
}

export default function HighExpSeasonGermanyKeywordPage() {
  return <StaticKeywordPage slug="high-exp-season-germany" />;
}
