import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther-wiki');
}

export default function ActiveNostaltherWikiKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther-wiki" />;
}
