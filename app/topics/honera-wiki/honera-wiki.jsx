import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('honera-wiki');
}

export default function HoneraWikiKeywordPage() {
  return <StaticKeywordPage slug="honera-wiki" />;
}
