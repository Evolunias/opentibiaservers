import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-4-seasonal-server');
}

export default function Arcaniarl84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-4-seasonal-server" />;
}
