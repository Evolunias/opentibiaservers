import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-high-exp-server-argentina');
}

export default function ThaisotHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-high-exp-server-argentina" />;
}
