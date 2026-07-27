import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-ot-server');
}

export default function BaiakIlusionOtServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-ot-server" />;
}
