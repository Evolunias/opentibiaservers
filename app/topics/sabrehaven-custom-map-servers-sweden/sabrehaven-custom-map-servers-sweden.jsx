import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-servers-sweden');
}

export default function SabrehavenCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-servers-sweden" />;
}
