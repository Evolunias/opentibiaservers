import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-no-reset-server-north-america');
}

export default function TibiameNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-no-reset-server-north-america" />;
}
