import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('celesta-wiki');
}

export default function CelestaWikiKeywordPage() {
  return <StaticKeywordPage slug="celesta-wiki" />;
}
