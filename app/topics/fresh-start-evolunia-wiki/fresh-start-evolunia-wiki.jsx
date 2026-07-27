import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolunia-wiki');
}

export default function FreshStartEvoluniaWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolunia-wiki" />;
}
