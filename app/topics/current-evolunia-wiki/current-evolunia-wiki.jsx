import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia-wiki');
}

export default function CurrentEvoluniaWikiKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia-wiki" />;
}
