import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-no-reset-server-brazil');
}

export default function TibianusNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibianus-no-reset-server-brazil" />;
}
