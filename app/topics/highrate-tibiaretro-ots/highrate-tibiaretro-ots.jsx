import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaretro-ots');
}

export default function HighrateTibiaretroOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaretro-ots" />;
}
