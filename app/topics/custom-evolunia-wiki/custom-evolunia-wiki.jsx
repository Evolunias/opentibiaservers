import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolunia-wiki');
}

export default function CustomEvoluniaWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-evolunia-wiki" />;
}
