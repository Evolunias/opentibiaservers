import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-no-reset-server-usa');
}

export default function NepreniaNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-no-reset-server-usa" />;
}
