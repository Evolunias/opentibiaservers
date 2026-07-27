import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ruthless-chaos-wiki');
}

export default function NoResetRuthlessChaosWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ruthless-chaos-wiki" />;
}
