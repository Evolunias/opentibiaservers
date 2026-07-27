import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-evo-wiki');
}

export default function Tibia76EvoWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-evo-wiki" />;
}
