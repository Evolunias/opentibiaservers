import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-servers-north-america');
}

export default function CyntaraCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-servers-north-america" />;
}
