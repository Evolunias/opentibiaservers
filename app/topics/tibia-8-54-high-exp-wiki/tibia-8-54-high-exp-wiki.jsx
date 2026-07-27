import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-high-exp-wiki');
}

export default function Tibia854HighExpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-high-exp-wiki" />;
}
