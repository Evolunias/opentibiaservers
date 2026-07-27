import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-server-mexico');
}

export default function CyntaraCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-server-mexico" />;
}
