import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ruthless-chaos-official');
}

export default function NewSeasonRuthlessChaosOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-ruthless-chaos-official" />;
}
