import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-12-seasonal-server');
}

export default function AureraGlobal12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-12-seasonal-server" />;
}
