import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-server-latin-america');
}

export default function CyntaraCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-server-latin-america" />;
}
