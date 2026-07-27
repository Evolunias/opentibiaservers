import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-server-sweden');
}

export default function CyntaraCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-server-sweden" />;
}
