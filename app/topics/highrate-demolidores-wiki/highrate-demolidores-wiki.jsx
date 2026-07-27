import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores-wiki');
}

export default function HighrateDemolidoresWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores-wiki" />;
}
