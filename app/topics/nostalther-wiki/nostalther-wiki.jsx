import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-wiki');
}

export default function NostaltherWikiKeywordPage() {
  return <StaticKeywordPage slug="nostalther-wiki" />;
}
