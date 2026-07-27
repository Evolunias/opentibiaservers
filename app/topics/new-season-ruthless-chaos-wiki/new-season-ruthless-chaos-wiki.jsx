import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ruthless-chaos-wiki');
}

export default function NewSeasonRuthlessChaosWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-ruthless-chaos-wiki" />;
}
