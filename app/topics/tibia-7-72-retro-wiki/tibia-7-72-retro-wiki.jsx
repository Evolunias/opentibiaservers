import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-retro-wiki');
}

export default function Tibia772RetroWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-retro-wiki" />;
}
