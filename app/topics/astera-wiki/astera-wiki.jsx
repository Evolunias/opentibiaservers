import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('astera-wiki');
}

export default function AsteraWikiKeywordPage() {
  return <StaticKeywordPage slug="astera-wiki" />;
}
