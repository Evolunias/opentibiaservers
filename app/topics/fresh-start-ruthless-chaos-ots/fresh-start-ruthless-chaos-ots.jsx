import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ruthless-chaos-ots');
}

export default function FreshStartRuthlessChaosOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ruthless-chaos-ots" />;
}
