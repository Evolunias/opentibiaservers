import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot-wiki');
}

export default function CustomNilotWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot-wiki" />;
}
