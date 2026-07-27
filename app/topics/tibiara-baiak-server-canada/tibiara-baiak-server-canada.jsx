import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-baiak-server-canada');
}

export default function TibiaraBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-baiak-server-canada" />;
}
