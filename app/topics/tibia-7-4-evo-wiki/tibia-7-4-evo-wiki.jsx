import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-evo-wiki');
}

export default function Tibia74EvoWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-evo-wiki" />;
}
