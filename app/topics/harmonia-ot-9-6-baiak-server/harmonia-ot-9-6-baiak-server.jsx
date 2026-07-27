import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-9-6-baiak-server');
}

export default function HarmoniaOt96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-9-6-baiak-server" />;
}
