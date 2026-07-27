import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-72-baiak-server');
}

export default function HarmoniaOt772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-72-baiak-server" />;
}
