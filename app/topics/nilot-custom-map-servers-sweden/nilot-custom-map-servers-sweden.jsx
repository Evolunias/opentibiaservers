import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-servers-sweden');
}

export default function NilotCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-servers-sweden" />;
}
