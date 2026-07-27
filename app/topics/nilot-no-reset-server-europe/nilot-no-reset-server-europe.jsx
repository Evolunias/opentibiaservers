import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-no-reset-server-europe');
}

export default function NilotNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nilot-no-reset-server-europe" />;
}
