import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvpe-server-sweden');
}

export default function CyntaraPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvpe-server-sweden" />;
}
