import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-baiak-server-south-america');
}

export default function OlderaBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-baiak-server-south-america" />;
}
