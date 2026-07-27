import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-calmera-ot-server');
}

export default function BaiakCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-calmera-ot-server" />;
}
