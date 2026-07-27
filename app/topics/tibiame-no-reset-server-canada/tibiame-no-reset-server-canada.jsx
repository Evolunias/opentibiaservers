import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-no-reset-server-canada');
}

export default function TibiameNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-no-reset-server-canada" />;
}
