import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia-wiki');
}

export default function PopularEvoluniaWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia-wiki" />;
}
