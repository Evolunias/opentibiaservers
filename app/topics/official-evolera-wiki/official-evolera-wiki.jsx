import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera-wiki');
}

export default function OfficialEvoleraWikiKeywordPage() {
  return <StaticKeywordPage slug="official-evolera-wiki" />;
}
