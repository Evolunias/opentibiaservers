import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ruthless-chaos-ot');
}

export default function NewSeasonRuthlessChaosOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-ruthless-chaos-ot" />;
}
