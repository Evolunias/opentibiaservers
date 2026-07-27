import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ruthless-chaos-wiki');
}

export default function LowrateRuthlessChaosWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ruthless-chaos-wiki" />;
}
