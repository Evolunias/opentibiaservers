import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-evo-wiki');
}

export default function Tibia854EvoWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-evo-wiki" />;
}
