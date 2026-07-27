import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-tibiascape-server');
}

export default function SeasonalTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-tibiascape-server" />;
}
