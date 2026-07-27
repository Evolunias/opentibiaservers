import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-harmonia-ot-server');
}

export default function BaiakHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-harmonia-ot-server" />;
}
