import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-no-reset-server-argentina');
}

export default function NilotNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-no-reset-server-argentina" />;
}
