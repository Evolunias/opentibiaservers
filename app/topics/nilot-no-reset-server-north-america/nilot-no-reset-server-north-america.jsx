import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-no-reset-server-north-america');
}

export default function NilotNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-no-reset-server-north-america" />;
}
