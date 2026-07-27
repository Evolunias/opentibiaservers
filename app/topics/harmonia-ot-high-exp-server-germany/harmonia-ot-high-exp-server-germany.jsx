import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-high-exp-server-germany');
}

export default function HarmoniaOtHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-high-exp-server-germany" />;
}
