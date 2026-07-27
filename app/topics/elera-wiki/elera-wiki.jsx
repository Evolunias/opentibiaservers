import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('elera-wiki');
}

export default function EleraWikiKeywordPage() {
  return <StaticKeywordPage slug="elera-wiki" />;
}
