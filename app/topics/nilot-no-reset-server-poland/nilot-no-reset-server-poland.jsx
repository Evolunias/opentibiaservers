import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-no-reset-server-poland');
}

export default function NilotNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nilot-no-reset-server-poland" />;
}
