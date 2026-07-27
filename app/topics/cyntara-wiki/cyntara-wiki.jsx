import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-wiki');
}

export default function CyntaraWikiKeywordPage() {
  return <StaticKeywordPage slug="cyntara-wiki" />;
}
