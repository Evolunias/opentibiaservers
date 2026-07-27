import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-server-canada');
}

export default function CyntaraCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-server-canada" />;
}
