import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-servers-usa');
}

export default function CyntaraCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-servers-usa" />;
}
