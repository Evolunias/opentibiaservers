import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-no-reset-server-france');
}

export default function TibiameNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiame-no-reset-server-france" />;
}
