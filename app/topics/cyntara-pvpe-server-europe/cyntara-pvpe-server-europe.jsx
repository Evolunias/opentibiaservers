import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvpe-server-europe');
}

export default function CyntaraPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvpe-server-europe" />;
}
