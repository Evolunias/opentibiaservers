import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaretro-ot-server');
}

export default function LowrateTibiaretroOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaretro-ot-server" />;
}
