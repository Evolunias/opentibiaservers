import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-servers-sweden');
}

export default function CyntaraCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-servers-sweden" />;
}
