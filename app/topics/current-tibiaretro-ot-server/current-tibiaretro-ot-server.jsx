import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro-ot-server');
}

export default function CurrentTibiaretroOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro-ot-server" />;
}
