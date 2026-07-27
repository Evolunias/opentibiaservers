import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-servers-germany');
}

export default function CyntaraCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-servers-germany" />;
}
