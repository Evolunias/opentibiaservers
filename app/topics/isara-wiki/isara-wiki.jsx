import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('isara-wiki');
}

export default function IsaraWikiKeywordPage() {
  return <StaticKeywordPage slug="isara-wiki" />;
}
