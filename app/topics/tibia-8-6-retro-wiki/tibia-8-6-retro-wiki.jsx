import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-retro-wiki');
}

export default function Tibia86RetroWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-retro-wiki" />;
}
