import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvpe-server-sweden');
}

export default function SabrehavenPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvpe-server-sweden" />;
}
