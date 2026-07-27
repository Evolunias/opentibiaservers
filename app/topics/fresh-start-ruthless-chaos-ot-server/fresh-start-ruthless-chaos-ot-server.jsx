import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ruthless-chaos-ot-server');
}

export default function FreshStartRuthlessChaosOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ruthless-chaos-ot-server" />;
}
