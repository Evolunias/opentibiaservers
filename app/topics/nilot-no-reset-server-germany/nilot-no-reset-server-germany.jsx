import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-no-reset-server-germany');
}

export default function NilotNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nilot-no-reset-server-germany" />;
}
