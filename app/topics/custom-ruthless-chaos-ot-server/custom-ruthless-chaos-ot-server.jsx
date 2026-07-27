import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos-ot-server');
}

export default function CustomRuthlessChaosOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos-ot-server" />;
}
