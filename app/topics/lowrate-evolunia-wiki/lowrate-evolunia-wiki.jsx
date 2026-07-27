import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolunia-wiki');
}

export default function LowrateEvoluniaWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolunia-wiki" />;
}
