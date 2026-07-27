import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-evo-wiki');
}

export default function Tibia80EvoWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-evo-wiki" />;
}
