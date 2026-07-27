import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-no-reset-server-usa');
}

export default function TibiameNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-no-reset-server-usa" />;
}
