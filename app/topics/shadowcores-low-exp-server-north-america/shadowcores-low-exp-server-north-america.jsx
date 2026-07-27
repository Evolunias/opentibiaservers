import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-low-exp-server-north-america');
}

export default function ShadowcoresLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-low-exp-server-north-america" />;
}
