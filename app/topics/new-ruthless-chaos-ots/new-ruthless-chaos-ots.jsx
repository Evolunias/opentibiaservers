import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ruthless-chaos-ots');
}

export default function NewRuthlessChaosOtsKeywordPage() {
  return <StaticKeywordPage slug="new-ruthless-chaos-ots" />;
}
