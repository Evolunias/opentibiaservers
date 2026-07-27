import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvpe-server-north-america');
}

export default function CyntaraPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvpe-server-north-america" />;
}
