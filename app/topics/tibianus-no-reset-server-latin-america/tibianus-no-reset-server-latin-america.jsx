import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-no-reset-server-latin-america');
}

export default function TibianusNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-no-reset-server-latin-america" />;
}
