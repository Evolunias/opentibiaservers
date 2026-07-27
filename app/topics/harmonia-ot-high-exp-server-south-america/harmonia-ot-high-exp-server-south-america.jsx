import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-high-exp-server-south-america');
}

export default function HarmoniaOtHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-high-exp-server-south-america" />;
}
