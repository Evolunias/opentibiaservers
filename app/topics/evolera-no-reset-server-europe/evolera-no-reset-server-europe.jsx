import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-no-reset-server-europe');
}

export default function EvoleraNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolera-no-reset-server-europe" />;
}
