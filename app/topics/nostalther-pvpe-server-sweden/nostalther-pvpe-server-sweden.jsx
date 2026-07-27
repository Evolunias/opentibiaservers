import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvpe-server-sweden');
}

export default function NostaltherPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvpe-server-sweden" />;
}
