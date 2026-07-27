import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-unline-wiki');
}

export default function OfficialUnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="official-unline-wiki" />;
}
