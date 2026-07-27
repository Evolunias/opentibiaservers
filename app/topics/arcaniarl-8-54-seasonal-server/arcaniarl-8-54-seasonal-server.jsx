import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-54-seasonal-server');
}

export default function Arcaniarl854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-54-seasonal-server" />;
}
