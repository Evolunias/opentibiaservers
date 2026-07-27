import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-servers-mexico');
}

export default function CyntaraCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-servers-mexico" />;
}
