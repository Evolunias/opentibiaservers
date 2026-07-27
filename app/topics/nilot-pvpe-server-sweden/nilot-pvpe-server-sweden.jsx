import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvpe-server-sweden');
}

export default function NilotPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvpe-server-sweden" />;
}
