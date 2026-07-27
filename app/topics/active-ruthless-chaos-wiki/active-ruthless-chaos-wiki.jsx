import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ruthless-chaos-wiki');
}

export default function ActiveRuthlessChaosWikiKeywordPage() {
  return <StaticKeywordPage slug="active-ruthless-chaos-wiki" />;
}
