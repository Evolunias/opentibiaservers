import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-wiki');
}

export default function EvoluniaWikiKeywordPage() {
  return <StaticKeywordPage slug="evolunia-wiki" />;
}
