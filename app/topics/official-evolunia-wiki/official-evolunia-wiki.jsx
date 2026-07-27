import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolunia-wiki');
}

export default function OfficialEvoluniaWikiKeywordPage() {
  return <StaticKeywordPage slug="official-evolunia-wiki" />;
}
