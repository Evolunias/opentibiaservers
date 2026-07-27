import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-baiak-server-south-america');
}

export default function HarmoniaOtBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-baiak-server-south-america" />;
}
