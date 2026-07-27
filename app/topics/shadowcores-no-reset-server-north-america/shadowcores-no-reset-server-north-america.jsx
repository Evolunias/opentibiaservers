import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-no-reset-server-north-america');
}

export default function ShadowcoresNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-no-reset-server-north-america" />;
}
