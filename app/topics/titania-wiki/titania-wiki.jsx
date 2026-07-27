import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('titania-wiki');
}

export default function TitaniaWikiKeywordPage() {
  return <StaticKeywordPage slug="titania-wiki" />;
}
