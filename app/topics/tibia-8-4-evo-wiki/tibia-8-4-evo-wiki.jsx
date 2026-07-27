import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-evo-wiki');
}

export default function Tibia84EvoWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-evo-wiki" />;
}
