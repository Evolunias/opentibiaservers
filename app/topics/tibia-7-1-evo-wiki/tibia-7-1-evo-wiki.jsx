import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-evo-wiki');
}

export default function Tibia71EvoWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-evo-wiki" />;
}
