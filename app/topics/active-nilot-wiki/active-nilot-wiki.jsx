import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot-wiki');
}

export default function ActiveNilotWikiKeywordPage() {
  return <StaticKeywordPage slug="active-nilot-wiki" />;
}
