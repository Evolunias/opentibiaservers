import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-baiak-server-mexico');
}

export default function HarmoniaOtBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-baiak-server-mexico" />;
}
