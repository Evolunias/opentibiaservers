import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-no-reset-server-mexico');
}

export default function TibiameNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiame-no-reset-server-mexico" />;
}
