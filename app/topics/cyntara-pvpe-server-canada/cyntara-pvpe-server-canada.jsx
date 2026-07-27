import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvpe-server-canada');
}

export default function CyntaraPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvpe-server-canada" />;
}
