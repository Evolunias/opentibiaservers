import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-no-reset-server-canada');
}

export default function NilotNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nilot-no-reset-server-canada" />;
}
