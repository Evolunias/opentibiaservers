import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-no-reset-server-brazil');
}

export default function NepreniaNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-no-reset-server-brazil" />;
}
