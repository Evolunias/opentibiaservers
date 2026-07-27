import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-wiki');
}

export default function RealestaWikiKeywordPage() {
  return <StaticKeywordPage slug="realesta-wiki" />;
}
