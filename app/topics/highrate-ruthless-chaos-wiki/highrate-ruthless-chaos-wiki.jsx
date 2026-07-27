import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ruthless-chaos-wiki');
}

export default function HighrateRuthlessChaosWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-ruthless-chaos-wiki" />;
}
