import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-no-reset-server-mexico');
}

export default function TibiantisNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-no-reset-server-mexico" />;
}
