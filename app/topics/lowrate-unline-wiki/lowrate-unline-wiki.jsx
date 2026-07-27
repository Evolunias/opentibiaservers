import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline-wiki');
}

export default function LowrateUnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline-wiki" />;
}
