import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-low-exp-wiki');
}

export default function Tibia14LowExpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-low-exp-wiki" />;
}
