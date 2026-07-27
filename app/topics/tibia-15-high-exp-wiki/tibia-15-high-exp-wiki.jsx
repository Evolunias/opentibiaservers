import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-high-exp-wiki');
}

export default function Tibia15HighExpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-high-exp-wiki" />;
}
