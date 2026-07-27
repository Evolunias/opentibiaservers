import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-11-seasonal-server');
}

export default function Arcaniarl11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-11-seasonal-server" />;
}
