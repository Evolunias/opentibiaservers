import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-no-reset-server-argentina');
}

export default function TibiantisNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-no-reset-server-argentina" />;
}
