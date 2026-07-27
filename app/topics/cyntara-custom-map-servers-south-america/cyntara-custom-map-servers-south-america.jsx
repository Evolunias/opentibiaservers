import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-servers-south-america');
}

export default function CyntaraCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-servers-south-america" />;
}
