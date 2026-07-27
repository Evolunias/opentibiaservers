import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-low-exp-server-north-america');
}

export default function RuthlessChaosLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-low-exp-server-north-america" />;
}
