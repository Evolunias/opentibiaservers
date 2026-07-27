import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('morgana-wiki');
}

export default function MorganaWikiKeywordPage() {
  return <StaticKeywordPage slug="morgana-wiki" />;
}
