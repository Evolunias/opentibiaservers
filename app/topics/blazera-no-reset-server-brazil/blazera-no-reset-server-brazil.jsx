import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-no-reset-server-brazil');
}

export default function BlazeraNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="blazera-no-reset-server-brazil" />;
}
