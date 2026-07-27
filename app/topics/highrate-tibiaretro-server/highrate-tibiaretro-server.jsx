import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaretro-server');
}

export default function HighrateTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaretro-server" />;
}
