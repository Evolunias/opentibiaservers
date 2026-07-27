import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvpe-server-france');
}

export default function CyntaraPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvpe-server-france" />;
}
