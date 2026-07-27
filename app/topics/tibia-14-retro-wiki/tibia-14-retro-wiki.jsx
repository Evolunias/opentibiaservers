import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-retro-wiki');
}

export default function Tibia14RetroWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-retro-wiki" />;
}
