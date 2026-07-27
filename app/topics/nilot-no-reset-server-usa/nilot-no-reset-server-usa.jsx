import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-no-reset-server-usa');
}

export default function NilotNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-no-reset-server-usa" />;
}
