import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-no-reset-server-brazil');
}

export default function MediviaNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="medivia-no-reset-server-brazil" />;
}
