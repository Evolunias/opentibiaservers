import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-france-server');
}

export default function TibiaretroFranceServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-france-server" />;
}
