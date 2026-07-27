import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-mist-of-death-wiki');
}

export default function LowrateMistOfDeathWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-mist-of-death-wiki" />;
}
