import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-server-usa');
}

export default function CyntaraCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-server-usa" />;
}
