import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-no-reset-server-uk');
}

export default function TibiameNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiame-no-reset-server-uk" />;
}
