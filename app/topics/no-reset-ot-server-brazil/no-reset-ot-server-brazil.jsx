import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ot-server-brazil');
}

export default function NoResetOtServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ot-server-brazil" />;
}
