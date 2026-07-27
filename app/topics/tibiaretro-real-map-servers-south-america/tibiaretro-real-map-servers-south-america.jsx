import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map-servers-south-america');
}

export default function TibiaretroRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map-servers-south-america" />;
}
