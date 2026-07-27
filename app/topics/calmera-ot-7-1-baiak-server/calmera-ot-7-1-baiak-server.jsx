import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-1-baiak-server');
}

export default function CalmeraOt71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-1-baiak-server" />;
}
