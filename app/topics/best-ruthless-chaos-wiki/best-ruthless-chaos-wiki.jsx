import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ruthless-chaos-wiki');
}

export default function BestRuthlessChaosWikiKeywordPage() {
  return <StaticKeywordPage slug="best-ruthless-chaos-wiki" />;
}
