import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaretro-ot');
}

export default function HighrateTibiaretroOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaretro-ot" />;
}
