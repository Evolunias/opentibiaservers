import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-low-exp-server-north-america');
}

export default function ThaisotLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-low-exp-server-north-america" />;
}
