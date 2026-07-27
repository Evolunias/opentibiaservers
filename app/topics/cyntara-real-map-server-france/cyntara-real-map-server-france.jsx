import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-server-france');
}

export default function CyntaraRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-server-france" />;
}
