import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-low-exp-wiki');
}

export default function Tibia96LowExpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-low-exp-wiki" />;
}
