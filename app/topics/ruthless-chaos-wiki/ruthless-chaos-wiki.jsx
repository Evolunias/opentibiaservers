import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-wiki');
}

export default function RuthlessChaosWikiKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-wiki" />;
}
