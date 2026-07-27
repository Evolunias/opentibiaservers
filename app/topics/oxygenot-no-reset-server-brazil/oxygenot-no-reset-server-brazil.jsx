import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-no-reset-server-brazil');
}

export default function OxygenotNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-no-reset-server-brazil" />;
}
