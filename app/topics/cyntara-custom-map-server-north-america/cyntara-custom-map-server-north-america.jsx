import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-server-north-america');
}

export default function CyntaraCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-server-north-america" />;
}
