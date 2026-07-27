import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-low-exp-wiki');
}

export default function Tibia11LowExpWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-low-exp-wiki" />;
}
