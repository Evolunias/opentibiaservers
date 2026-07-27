import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-server-brazil');
}

export default function CyntaraCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-server-brazil" />;
}
