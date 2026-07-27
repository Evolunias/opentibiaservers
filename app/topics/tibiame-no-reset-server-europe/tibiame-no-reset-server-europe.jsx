import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-no-reset-server-europe');
}

export default function TibiameNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiame-no-reset-server-europe" />;
}
