import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-0-baiak-server');
}

export default function CalmeraOt100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-0-baiak-server" />;
}
