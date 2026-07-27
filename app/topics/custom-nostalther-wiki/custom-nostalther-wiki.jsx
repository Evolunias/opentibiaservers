import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther-wiki');
}

export default function CustomNostaltherWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther-wiki" />;
}
