import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvpe-server-south-america');
}

export default function CyntaraPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvpe-server-south-america" />;
}
