import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-evo-wiki');
}

export default function Tibia96EvoWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-evo-wiki" />;
}
