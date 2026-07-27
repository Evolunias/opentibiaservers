import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-15-baiak-server');
}

export default function HarmoniaOt15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-15-baiak-server" />;
}
