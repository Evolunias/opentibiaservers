import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-no-reset-server-usa');
}

export default function OxygenotNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-no-reset-server-usa" />;
}
