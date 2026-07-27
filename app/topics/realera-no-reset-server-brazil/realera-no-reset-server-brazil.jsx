import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-no-reset-server-brazil');
}

export default function RealeraNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realera-no-reset-server-brazil" />;
}
