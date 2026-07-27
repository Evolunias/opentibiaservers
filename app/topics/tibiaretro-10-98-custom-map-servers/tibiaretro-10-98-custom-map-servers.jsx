import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-98-custom-map-servers');
}

export default function Tibiaretro1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-98-custom-map-servers" />;
}
