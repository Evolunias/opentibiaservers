import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map-servers-europe');
}

export default function TibiaretroRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map-servers-europe" />;
}
