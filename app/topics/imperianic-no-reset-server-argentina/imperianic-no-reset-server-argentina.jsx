import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-no-reset-server-argentina');
}

export default function ImperianicNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-no-reset-server-argentina" />;
}
