import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-no-reset-server-north-america');
}

export default function NepreniaNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-no-reset-server-north-america" />;
}
