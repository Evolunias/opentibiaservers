import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ruthless-chaos-server');
}

export default function NewSeasonRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-ruthless-chaos-server" />;
}
