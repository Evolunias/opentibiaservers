import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-luminera-wiki');
}

export default function OfficialLumineraWikiKeywordPage() {
  return <StaticKeywordPage slug="official-luminera-wiki" />;
}
