import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-eternal-odyssey-server');
}

export default function SeasonalEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-eternal-odyssey-server" />;
}
