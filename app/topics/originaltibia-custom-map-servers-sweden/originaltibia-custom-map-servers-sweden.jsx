import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-servers-sweden');
}

export default function OriginaltibiaCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-servers-sweden" />;
}
