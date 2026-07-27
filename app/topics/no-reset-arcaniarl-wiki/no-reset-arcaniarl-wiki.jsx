import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl-wiki');
}

export default function NoResetArcaniarlWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl-wiki" />;
}
