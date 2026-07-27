import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvpe-server-uk');
}

export default function CyntaraPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvpe-server-uk" />;
}
