import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-no-reset-server-brazil');
}

export default function ImperianicNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="imperianic-no-reset-server-brazil" />;
}
