import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-tibiame-server');
}

export default function SeasonalTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-tibiame-server" />;
}
