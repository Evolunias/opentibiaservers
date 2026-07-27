import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-baiak-server-south-america');
}

export default function TibianusBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-baiak-server-south-america" />;
}
