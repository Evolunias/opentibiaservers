import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-low-exp-server-germany');
}

export default function HarmoniaOtLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-low-exp-server-germany" />;
}
