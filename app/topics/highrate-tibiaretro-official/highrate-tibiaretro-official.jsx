import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaretro-official');
}

export default function HighrateTibiaretroOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaretro-official" />;
}
