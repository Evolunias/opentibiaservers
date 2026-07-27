import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-wiki');
}

export default function TibiaraWikiKeywordPage() {
  return <StaticKeywordPage slug="tibiara-wiki" />;
}
