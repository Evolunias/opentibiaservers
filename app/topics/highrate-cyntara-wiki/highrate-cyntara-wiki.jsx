import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara-wiki');
}

export default function HighrateCyntaraWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara-wiki" />;
}
