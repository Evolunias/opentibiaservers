import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-98-custom-map-server');
}

export default function Tibiaretro1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-98-custom-map-server" />;
}
