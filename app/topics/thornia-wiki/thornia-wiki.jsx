import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-wiki');
}

export default function ThorniaWikiKeywordPage() {
  return <StaticKeywordPage slug="thornia-wiki" />;
}
