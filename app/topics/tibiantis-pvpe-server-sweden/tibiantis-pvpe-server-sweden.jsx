import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvpe-server-sweden');
}

export default function TibiantisPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvpe-server-sweden" />;
}
