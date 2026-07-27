import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-retro-wiki');
}

export default function Tibia80RetroWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-retro-wiki" />;
}
