import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-retro-wiki');
}

export default function Tibia84RetroWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-retro-wiki" />;
}
