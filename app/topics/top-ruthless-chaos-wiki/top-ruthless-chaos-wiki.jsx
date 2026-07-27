import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ruthless-chaos-wiki');
}

export default function TopRuthlessChaosWikiKeywordPage() {
  return <StaticKeywordPage slug="top-ruthless-chaos-wiki" />;
}
