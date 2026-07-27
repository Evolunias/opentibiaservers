import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvpe-server-mexico');
}

export default function CyntaraPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvpe-server-mexico" />;
}
