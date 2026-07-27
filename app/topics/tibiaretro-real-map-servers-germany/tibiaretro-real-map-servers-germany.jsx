import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map-servers-germany');
}

export default function TibiaretroRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map-servers-germany" />;
}
