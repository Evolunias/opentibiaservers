import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ruthless-chaos-ot-server');
}

export default function NewSeasonRuthlessChaosOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-ruthless-chaos-ot-server" />;
}
