import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-servers-sweden');
}

export default function RuthlessChaosCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-servers-sweden" />;
}
