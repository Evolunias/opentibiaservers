import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ruthless-chaos-ots');
}

export default function NewSeasonRuthlessChaosOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-ruthless-chaos-ots" />;
}
