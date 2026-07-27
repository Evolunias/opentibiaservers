import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-baiak-server-canada');
}

export default function HarmoniaOtBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-baiak-server-canada" />;
}
