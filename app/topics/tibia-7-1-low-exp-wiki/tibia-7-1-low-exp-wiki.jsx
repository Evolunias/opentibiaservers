import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-low-exp-wiki');
}

export default function Tibia71LowExpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-low-exp-wiki" />;
}
