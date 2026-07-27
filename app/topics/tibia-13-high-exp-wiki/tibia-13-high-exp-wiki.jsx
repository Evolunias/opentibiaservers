import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-high-exp-wiki');
}

export default function Tibia13HighExpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-high-exp-wiki" />;
}
