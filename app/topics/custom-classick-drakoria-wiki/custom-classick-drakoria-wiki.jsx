import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classick-drakoria-wiki');
}

export default function CustomClassickDrakoriaWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-classick-drakoria-wiki" />;
}
