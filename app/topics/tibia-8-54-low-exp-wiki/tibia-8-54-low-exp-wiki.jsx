import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-low-exp-wiki');
}

export default function Tibia854LowExpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-low-exp-wiki" />;
}
