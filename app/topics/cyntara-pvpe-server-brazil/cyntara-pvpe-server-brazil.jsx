import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvpe-server-brazil');
}

export default function CyntaraPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvpe-server-brazil" />;
}
