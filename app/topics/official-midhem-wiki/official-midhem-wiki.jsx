import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-midhem-wiki');
}

export default function OfficialMidhemWikiKeywordPage() {
  return <StaticKeywordPage slug="official-midhem-wiki" />;
}
