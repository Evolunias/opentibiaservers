import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolunia-wiki');
}

export default function NoResetEvoluniaWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolunia-wiki" />;
}
