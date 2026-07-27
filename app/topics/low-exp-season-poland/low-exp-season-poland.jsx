import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-season-poland');
}

export default function LowExpSeasonPolandKeywordPage() {
  return <StaticKeywordPage slug="low-exp-season-poland" />;
}
