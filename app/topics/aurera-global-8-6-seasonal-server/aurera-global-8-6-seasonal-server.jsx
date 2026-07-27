import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-6-seasonal-server');
}

export default function AureraGlobal86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-6-seasonal-server" />;
}
