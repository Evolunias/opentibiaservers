import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem-wiki');
}

export default function LowrateMidhemWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem-wiki" />;
}
