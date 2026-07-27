import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiara-wiki');
}

export default function CustomTibiaraWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiara-wiki" />;
}
