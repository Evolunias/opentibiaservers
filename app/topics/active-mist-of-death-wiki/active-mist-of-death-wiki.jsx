import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death-wiki');
}

export default function ActiveMistOfDeathWikiKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death-wiki" />;
}
