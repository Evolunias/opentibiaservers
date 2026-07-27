import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-no-reset-server-mexico');
}

export default function NilotNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nilot-no-reset-server-mexico" />;
}
