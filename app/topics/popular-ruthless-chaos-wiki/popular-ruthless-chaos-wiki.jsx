import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ruthless-chaos-wiki');
}

export default function PopularRuthlessChaosWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-ruthless-chaos-wiki" />;
}
