import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternia-wiki');
}

export default function EterniaWikiKeywordPage() {
  return <StaticKeywordPage slug="eternia-wiki" />;
}
