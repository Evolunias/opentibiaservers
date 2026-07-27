import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-no-reset-server-latin-america');
}

export default function NepreniaNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-no-reset-server-latin-america" />;
}
