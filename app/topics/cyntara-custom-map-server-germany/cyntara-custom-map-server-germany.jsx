import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-server-germany');
}

export default function CyntaraCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-server-germany" />;
}
