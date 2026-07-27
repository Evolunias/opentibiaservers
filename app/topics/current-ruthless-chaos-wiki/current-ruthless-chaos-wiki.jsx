import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ruthless-chaos-wiki');
}

export default function CurrentRuthlessChaosWikiKeywordPage() {
  return <StaticKeywordPage slug="current-ruthless-chaos-wiki" />;
}
