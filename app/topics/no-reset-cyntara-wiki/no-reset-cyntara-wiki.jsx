import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-cyntara-wiki');
}

export default function NoResetCyntaraWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-cyntara-wiki" />;
}
