import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-baiak-server-brazil');
}

export default function HarmoniaOtBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-baiak-server-brazil" />;
}
