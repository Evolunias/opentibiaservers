import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-low-exp-server-usa');
}

export default function ThaisotLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-low-exp-server-usa" />;
}
