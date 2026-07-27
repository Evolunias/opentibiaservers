import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-low-exp-wiki');
}

export default function Tibia76LowExpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-low-exp-wiki" />;
}
