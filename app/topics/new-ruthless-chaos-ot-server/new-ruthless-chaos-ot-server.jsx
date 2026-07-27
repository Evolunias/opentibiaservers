import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ruthless-chaos-ot-server');
}

export default function NewRuthlessChaosOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-ruthless-chaos-ot-server" />;
}
