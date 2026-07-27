import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-baiak-server-germany');
}

export default function HarmoniaOtBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-baiak-server-germany" />;
}
