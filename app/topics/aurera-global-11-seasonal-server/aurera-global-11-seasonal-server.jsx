import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-11-seasonal-server');
}

export default function AureraGlobal11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-11-seasonal-server" />;
}
