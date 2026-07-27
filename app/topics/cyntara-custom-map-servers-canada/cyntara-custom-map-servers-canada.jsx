import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-servers-canada');
}

export default function CyntaraCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-servers-canada" />;
}
