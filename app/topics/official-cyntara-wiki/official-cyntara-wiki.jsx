import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara-wiki');
}

export default function OfficialCyntaraWikiKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara-wiki" />;
}
