import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-no-reset-server-europe');
}

export default function ShadowcoresNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-no-reset-server-europe" />;
}
