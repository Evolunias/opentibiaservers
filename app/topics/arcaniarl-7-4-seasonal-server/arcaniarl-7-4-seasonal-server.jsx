import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-4-seasonal-server');
}

export default function Arcaniarl74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-4-seasonal-server" />;
}
