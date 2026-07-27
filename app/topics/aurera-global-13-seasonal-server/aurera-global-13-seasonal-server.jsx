import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-13-seasonal-server');
}

export default function AureraGlobal13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-13-seasonal-server" />;
}
