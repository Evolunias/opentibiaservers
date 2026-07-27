import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-no-reset-server-germany');
}

export default function ShadowcoresNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-no-reset-server-germany" />;
}
