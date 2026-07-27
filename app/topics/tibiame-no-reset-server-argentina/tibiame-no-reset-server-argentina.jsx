import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-no-reset-server-argentina');
}

export default function TibiameNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-no-reset-server-argentina" />;
}
