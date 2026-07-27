import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-low-exp-server-argentina');
}

export default function ThaisotLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-low-exp-server-argentina" />;
}
