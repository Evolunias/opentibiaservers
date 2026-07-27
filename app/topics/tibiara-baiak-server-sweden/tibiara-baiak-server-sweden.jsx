import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-baiak-server-sweden');
}

export default function TibiaraBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiara-baiak-server-sweden" />;
}
