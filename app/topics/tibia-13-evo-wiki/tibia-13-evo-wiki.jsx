import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-evo-wiki');
}

export default function Tibia13EvoWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-evo-wiki" />;
}
