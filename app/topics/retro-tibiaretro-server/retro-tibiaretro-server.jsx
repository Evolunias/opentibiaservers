import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-tibiaretro-server');
}

export default function RetroTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="retro-tibiaretro-server" />;
}
