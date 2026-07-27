import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-low-exp-wiki');
}

export default function Tibia13LowExpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-low-exp-wiki" />;
}
