import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-13-baiak-server');
}

export default function CalmeraOt13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-13-baiak-server" />;
}
