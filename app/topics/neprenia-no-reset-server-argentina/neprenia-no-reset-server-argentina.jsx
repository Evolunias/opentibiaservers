import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-no-reset-server-argentina');
}

export default function NepreniaNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-no-reset-server-argentina" />;
}
