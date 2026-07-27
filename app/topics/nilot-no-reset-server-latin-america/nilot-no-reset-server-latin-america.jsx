import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-no-reset-server-latin-america');
}

export default function NilotNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-no-reset-server-latin-america" />;
}
