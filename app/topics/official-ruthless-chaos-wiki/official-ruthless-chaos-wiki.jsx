import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ruthless-chaos-wiki');
}

export default function OfficialRuthlessChaosWikiKeywordPage() {
  return <StaticKeywordPage slug="official-ruthless-chaos-wiki" />;
}
