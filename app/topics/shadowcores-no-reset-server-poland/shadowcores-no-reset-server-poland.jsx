import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-no-reset-server-poland');
}

export default function ShadowcoresNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-no-reset-server-poland" />;
}
