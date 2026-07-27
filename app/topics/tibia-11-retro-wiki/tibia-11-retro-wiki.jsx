import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-retro-wiki');
}

export default function Tibia11RetroWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-retro-wiki" />;
}
