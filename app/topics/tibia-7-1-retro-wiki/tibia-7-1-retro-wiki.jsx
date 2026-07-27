import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-retro-wiki');
}

export default function Tibia71RetroWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-retro-wiki" />;
}
