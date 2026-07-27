import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvpe-server-sweden');
}

export default function ImperianicPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvpe-server-sweden" />;
}
