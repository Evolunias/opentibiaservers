import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('danubia-wiki');
}

export default function DanubiaWikiKeywordPage() {
  return <StaticKeywordPage slug="danubia-wiki" />;
}
