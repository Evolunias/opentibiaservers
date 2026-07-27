import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvpe-server-germany');
}

export default function CyntaraPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvpe-server-germany" />;
}
