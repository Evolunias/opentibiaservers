import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvpe-server-sweden');
}

export default function TibiascapePvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvpe-server-sweden" />;
}
