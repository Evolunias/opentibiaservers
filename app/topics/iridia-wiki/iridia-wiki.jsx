import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('iridia-wiki');
}

export default function IridiaWikiKeywordPage() {
  return <StaticKeywordPage slug="iridia-wiki" />;
}
