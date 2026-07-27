import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-6-seasonal-server');
}

export default function Arcaniarl86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-6-seasonal-server" />;
}
