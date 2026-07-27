import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-evo-wiki');
}

export default function Tibia772EvoWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-evo-wiki" />;
}
