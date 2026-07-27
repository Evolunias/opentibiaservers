import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-high-exp-server-north-america');
}

export default function ShadowcoresHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-high-exp-server-north-america" />;
}
