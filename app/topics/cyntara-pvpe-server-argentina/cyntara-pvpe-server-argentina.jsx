import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvpe-server-argentina');
}

export default function CyntaraPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvpe-server-argentina" />;
}
