import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-no-reset-server-north-america');
}

export default function TibiantisNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-no-reset-server-north-america" />;
}
