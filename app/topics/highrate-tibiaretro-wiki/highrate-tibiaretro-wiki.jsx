import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaretro-wiki');
}

export default function HighrateTibiaretroWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaretro-wiki" />;
}
