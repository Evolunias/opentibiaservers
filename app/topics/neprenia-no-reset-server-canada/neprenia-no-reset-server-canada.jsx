import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-no-reset-server-canada');
}

export default function NepreniaNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-no-reset-server-canada" />;
}
