import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-baiak-server-europe');
}

export default function HarmoniaOtBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-baiak-server-europe" />;
}
