import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaretro-ot-server');
}

export default function HighrateTibiaretroOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaretro-ot-server" />;
}
