import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-servers-latin-america');
}

export default function CyntaraCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-servers-latin-america" />;
}
