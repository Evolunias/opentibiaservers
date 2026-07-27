import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ruthless-chaos-wiki');
}

export default function FreshStartRuthlessChaosWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ruthless-chaos-wiki" />;
}
