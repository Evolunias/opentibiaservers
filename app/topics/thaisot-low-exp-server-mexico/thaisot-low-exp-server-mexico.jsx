import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-low-exp-server-mexico');
}

export default function ThaisotLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thaisot-low-exp-server-mexico" />;
}
