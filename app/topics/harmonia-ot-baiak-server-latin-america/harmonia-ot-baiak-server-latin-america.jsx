import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-baiak-server-latin-america');
}

export default function HarmoniaOtBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-baiak-server-latin-america" />;
}
