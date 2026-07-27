import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-wiki');
}

export default function MistOfDeathWikiKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-wiki" />;
}
