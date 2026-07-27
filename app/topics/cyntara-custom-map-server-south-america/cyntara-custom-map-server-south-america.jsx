import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-server-south-america');
}

export default function CyntaraCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-server-south-america" />;
}
