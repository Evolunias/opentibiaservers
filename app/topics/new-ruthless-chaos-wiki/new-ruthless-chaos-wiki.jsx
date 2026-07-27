import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ruthless-chaos-wiki');
}

export default function NewRuthlessChaosWikiKeywordPage() {
  return <StaticKeywordPage slug="new-ruthless-chaos-wiki" />;
}
