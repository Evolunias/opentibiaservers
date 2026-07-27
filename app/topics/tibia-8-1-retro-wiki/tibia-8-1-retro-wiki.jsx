import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-retro-wiki');
}

export default function Tibia81RetroWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-retro-wiki" />;
}
