import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-servers-sweden');
}

export default function RealeraCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-servers-sweden" />;
}
