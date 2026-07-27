import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-germany-server');
}

export default function TibiaretroGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-germany-server" />;
}
