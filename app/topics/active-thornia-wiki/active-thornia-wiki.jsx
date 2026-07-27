import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thornia-wiki');
}

export default function ActiveThorniaWikiKeywordPage() {
  return <StaticKeywordPage slug="active-thornia-wiki" />;
}
