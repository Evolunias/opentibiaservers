import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-baiak-server-canada');
}

export default function BlazeraBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="blazera-baiak-server-canada" />;
}
