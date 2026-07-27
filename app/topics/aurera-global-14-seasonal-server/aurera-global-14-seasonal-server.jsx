import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-14-seasonal-server');
}

export default function AureraGlobal14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-14-seasonal-server" />;
}
