import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-evo-wiki');
}

export default function Tibia14EvoWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-evo-wiki" />;
}
