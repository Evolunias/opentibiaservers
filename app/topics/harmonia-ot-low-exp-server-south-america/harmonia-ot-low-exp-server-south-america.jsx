import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-low-exp-server-south-america');
}

export default function HarmoniaOtLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-low-exp-server-south-america" />;
}
