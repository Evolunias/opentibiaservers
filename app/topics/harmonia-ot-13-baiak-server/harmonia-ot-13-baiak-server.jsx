import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-13-baiak-server');
}

export default function HarmoniaOt13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-13-baiak-server" />;
}
