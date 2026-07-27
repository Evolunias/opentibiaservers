import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-servers-sweden');
}

export default function BlazeraCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-servers-sweden" />;
}
