import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-no-reset-server-usa');
}

export default function ImperianicNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-no-reset-server-usa" />;
}
