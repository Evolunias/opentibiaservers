import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-14-baiak-server');
}

export default function HarmoniaOt14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-14-baiak-server" />;
}
