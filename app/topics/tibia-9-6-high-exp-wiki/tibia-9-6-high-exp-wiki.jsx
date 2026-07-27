import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-high-exp-wiki');
}

export default function Tibia96HighExpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-high-exp-wiki" />;
}
