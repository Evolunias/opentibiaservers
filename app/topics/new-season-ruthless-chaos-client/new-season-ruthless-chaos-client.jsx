import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ruthless-chaos-client');
}

export default function NewSeasonRuthlessChaosClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-ruthless-chaos-client" />;
}
