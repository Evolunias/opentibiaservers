import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia-wiki');
}

export default function TopEvoluniaWikiKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia-wiki" />;
}
