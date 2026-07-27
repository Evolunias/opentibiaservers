import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-retro-wiki');
}

export default function Tibia1098RetroWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-retro-wiki" />;
}
