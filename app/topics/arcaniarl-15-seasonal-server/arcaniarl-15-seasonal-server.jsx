import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-15-seasonal-server');
}

export default function Arcaniarl15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-15-seasonal-server" />;
}
