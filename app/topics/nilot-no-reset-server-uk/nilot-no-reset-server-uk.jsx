import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-no-reset-server-uk');
}

export default function NilotNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="nilot-no-reset-server-uk" />;
}
