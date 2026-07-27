import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolunia-wiki');
}

export default function HighrateEvoluniaWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolunia-wiki" />;
}
