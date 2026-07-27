import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-server-argentina');
}

export default function CyntaraCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-server-argentina" />;
}
