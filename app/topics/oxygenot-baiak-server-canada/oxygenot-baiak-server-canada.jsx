import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-baiak-server-canada');
}

export default function OxygenotBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-baiak-server-canada" />;
}
