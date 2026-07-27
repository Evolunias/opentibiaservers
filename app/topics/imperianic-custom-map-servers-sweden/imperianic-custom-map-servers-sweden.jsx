import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-servers-sweden');
}

export default function ImperianicCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-servers-sweden" />;
}
