import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaretro-client');
}

export default function HighrateTibiaretroClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaretro-client" />;
}
