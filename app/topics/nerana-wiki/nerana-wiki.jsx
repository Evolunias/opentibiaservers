import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nerana-wiki');
}

export default function NeranaWikiKeywordPage() {
  return <StaticKeywordPage slug="nerana-wiki" />;
}
