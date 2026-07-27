import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-low-exp-wiki');
}

export default function Tibia15LowExpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-low-exp-wiki" />;
}
