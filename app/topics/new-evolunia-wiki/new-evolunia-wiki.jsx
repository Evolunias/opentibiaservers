import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolunia-wiki');
}

export default function NewEvoluniaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-evolunia-wiki" />;
}
