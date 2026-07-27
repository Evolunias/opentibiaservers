import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('amera-wiki');
}

export default function AmeraWikiKeywordPage() {
  return <StaticKeywordPage slug="amera-wiki" />;
}
