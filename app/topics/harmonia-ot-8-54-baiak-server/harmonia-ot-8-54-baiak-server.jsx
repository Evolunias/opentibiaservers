import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-54-baiak-server');
}

export default function HarmoniaOt854BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-54-baiak-server" />;
}
