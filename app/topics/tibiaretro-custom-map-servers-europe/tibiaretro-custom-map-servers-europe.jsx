import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-servers-europe');
}

export default function TibiaretroCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-servers-europe" />;
}
