import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-low-exp-wiki');
}

export default function Tibia12LowExpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-low-exp-wiki" />;
}
