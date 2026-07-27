import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-evo-wiki');
}

export default function Tibia100EvoWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-evo-wiki" />;
}
