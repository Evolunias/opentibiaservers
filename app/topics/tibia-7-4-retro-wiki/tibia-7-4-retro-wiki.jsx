import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-retro-wiki');
}

export default function Tibia74RetroWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-retro-wiki" />;
}
