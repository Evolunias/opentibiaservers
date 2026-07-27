import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos-ots');
}

export default function CustomRuthlessChaosOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos-ots" />;
}
