import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-high-exp-server-canada');
}

export default function HarmoniaOtHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-high-exp-server-canada" />;
}
