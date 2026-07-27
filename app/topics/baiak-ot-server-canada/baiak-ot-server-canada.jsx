import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ot-server-canada');
}

export default function BaiakOtServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ot-server-canada" />;
}
