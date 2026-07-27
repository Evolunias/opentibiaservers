import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-fresh-start-server-germany');
}

export default function CalmeraOtFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-fresh-start-server-germany" />;
}
