import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-baiak-server-south-america');
}

export default function TibijkaBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-baiak-server-south-america" />;
}
