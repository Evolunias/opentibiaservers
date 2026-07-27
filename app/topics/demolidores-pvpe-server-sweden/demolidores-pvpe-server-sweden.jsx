import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvpe-server-sweden');
}

export default function DemolidoresPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvpe-server-sweden" />;
}
