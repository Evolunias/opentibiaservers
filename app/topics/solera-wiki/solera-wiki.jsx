import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('solera-wiki');
}

export default function SoleraWikiKeywordPage() {
  return <StaticKeywordPage slug="solera-wiki" />;
}
