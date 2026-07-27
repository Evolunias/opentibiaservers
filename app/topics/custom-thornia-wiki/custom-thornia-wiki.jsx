import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia-wiki');
}

export default function CustomThorniaWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia-wiki" />;
}
