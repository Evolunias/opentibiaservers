import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-11-baiak-server');
}

export default function CalmeraOt11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-11-baiak-server" />;
}
