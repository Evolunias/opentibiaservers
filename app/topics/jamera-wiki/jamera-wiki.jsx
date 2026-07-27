import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('jamera-wiki');
}

export default function JameraWikiKeywordPage() {
  return <StaticKeywordPage slug="jamera-wiki" />;
}
