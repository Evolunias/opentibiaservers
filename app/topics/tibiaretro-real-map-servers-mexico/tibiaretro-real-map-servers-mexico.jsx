import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map-servers-mexico');
}

export default function TibiaretroRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map-servers-mexico" />;
}
