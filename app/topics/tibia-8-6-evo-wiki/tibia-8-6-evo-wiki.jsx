import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-evo-wiki');
}

export default function Tibia86EvoWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-evo-wiki" />;
}
