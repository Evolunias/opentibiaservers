import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia-wiki');
}

export default function ActiveEvoluniaWikiKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia-wiki" />;
}
