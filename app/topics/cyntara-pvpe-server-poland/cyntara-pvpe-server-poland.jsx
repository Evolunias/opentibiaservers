import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvpe-server-poland');
}

export default function CyntaraPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvpe-server-poland" />;
}
