import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-baiak-server-sweden');
}

export default function HarmoniaOtBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-baiak-server-sweden" />;
}
