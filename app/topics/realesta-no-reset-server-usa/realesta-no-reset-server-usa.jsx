import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-no-reset-server-usa');
}

export default function RealestaNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realesta-no-reset-server-usa" />;
}
