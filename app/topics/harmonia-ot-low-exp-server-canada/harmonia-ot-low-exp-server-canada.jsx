import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-low-exp-server-canada');
}

export default function HarmoniaOtLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-low-exp-server-canada" />;
}
