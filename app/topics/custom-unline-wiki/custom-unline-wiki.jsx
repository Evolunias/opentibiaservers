import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline-wiki');
}

export default function CustomUnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-unline-wiki" />;
}
