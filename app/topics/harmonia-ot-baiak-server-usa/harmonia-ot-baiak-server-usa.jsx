import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-baiak-server-usa');
}

export default function HarmoniaOtBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-baiak-server-usa" />;
}
