import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-servers-sweden');
}

export default function SabrehavenRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-servers-sweden" />;
}
