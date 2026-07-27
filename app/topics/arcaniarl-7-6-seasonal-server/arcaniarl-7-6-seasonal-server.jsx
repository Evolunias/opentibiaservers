import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-6-seasonal-server');
}

export default function Arcaniarl76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-6-seasonal-server" />;
}
