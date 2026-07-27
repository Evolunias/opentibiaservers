import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiara-wiki');
}

export default function ActiveTibiaraWikiKeywordPage() {
  return <StaticKeywordPage slug="active-tibiara-wiki" />;
}
