import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-15-seasonal-server');
}

export default function AureraGlobal15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-15-seasonal-server" />;
}
