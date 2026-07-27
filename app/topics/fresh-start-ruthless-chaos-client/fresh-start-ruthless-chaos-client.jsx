import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ruthless-chaos-client');
}

export default function FreshStartRuthlessChaosClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ruthless-chaos-client" />;
}
