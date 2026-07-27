import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvpe-server-usa');
}

export default function CyntaraPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvpe-server-usa" />;
}
