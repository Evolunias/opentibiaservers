import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ruthless-chaos-private-server');
}

export default function NewSeasonRuthlessChaosPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-ruthless-chaos-private-server" />;
}
