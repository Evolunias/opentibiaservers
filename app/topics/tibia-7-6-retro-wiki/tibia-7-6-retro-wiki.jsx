import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-retro-wiki');
}

export default function Tibia76RetroWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-retro-wiki" />;
}
