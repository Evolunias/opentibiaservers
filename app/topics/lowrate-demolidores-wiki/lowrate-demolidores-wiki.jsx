import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-demolidores-wiki');
}

export default function LowrateDemolidoresWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-demolidores-wiki" />;
}
