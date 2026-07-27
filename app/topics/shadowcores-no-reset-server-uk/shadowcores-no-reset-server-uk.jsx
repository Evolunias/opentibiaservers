import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-no-reset-server-uk');
}

export default function ShadowcoresNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-no-reset-server-uk" />;
}
