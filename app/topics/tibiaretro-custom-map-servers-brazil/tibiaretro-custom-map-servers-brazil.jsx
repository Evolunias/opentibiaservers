import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-servers-brazil');
}

export default function TibiaretroCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-servers-brazil" />;
}
