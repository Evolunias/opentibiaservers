import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-high-exp-wiki');
}

export default function Tibia14HighExpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-high-exp-wiki" />;
}
