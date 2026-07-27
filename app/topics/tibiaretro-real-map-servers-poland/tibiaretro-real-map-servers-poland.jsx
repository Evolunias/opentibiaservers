import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map-servers-poland');
}

export default function TibiaretroRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map-servers-poland" />;
}
