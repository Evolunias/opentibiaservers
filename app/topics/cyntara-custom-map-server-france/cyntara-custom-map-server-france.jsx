import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-server-france');
}

export default function CyntaraCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-server-france" />;
}
