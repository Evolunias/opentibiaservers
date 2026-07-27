import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-baiak-server-uk');
}

export default function HarmoniaOtBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-baiak-server-uk" />;
}
