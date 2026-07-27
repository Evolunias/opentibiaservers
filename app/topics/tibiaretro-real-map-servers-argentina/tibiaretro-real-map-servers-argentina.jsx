import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map-servers-argentina');
}

export default function TibiaretroRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map-servers-argentina" />;
}
