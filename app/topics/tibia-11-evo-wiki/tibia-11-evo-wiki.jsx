import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-evo-wiki');
}

export default function Tibia11EvoWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-evo-wiki" />;
}
