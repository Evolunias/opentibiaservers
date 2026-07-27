import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-season-germany');
}

export default function LowExpSeasonGermanyKeywordPage() {
  return <StaticKeywordPage slug="low-exp-season-germany" />;
}
