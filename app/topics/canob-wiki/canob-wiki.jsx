import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-wiki');
}

export default function CanobWikiKeywordPage() {
  return <StaticKeywordPage slug="canob-wiki" />;
}
