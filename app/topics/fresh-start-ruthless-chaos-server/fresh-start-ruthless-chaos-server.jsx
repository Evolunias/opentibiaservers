import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ruthless-chaos-server');
}

export default function FreshStartRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ruthless-chaos-server" />;
}
