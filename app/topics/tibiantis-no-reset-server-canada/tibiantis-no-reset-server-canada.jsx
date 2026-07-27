import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-no-reset-server-canada');
}

export default function TibiantisNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-no-reset-server-canada" />;
}
