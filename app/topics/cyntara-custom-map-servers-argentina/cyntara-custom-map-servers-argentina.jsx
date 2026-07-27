import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-servers-argentina');
}

export default function CyntaraCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-servers-argentina" />;
}
