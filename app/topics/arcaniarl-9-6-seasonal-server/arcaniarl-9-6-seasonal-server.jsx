import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-9-6-seasonal-server');
}

export default function Arcaniarl96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-9-6-seasonal-server" />;
}
