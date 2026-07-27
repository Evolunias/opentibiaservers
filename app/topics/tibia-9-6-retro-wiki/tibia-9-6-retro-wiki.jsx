import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-retro-wiki');
}

export default function Tibia96RetroWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-retro-wiki" />;
}
