import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-evo-wiki');
}

export default function Tibia15EvoWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-evo-wiki" />;
}
