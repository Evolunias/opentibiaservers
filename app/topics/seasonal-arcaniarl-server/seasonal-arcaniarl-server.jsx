import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-arcaniarl-server');
}

export default function SeasonalArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-arcaniarl-server" />;
}
