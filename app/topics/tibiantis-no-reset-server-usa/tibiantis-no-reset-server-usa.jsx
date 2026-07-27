import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-no-reset-server-usa');
}

export default function TibiantisNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-no-reset-server-usa" />;
}
