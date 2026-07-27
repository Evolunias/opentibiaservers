import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-10-0-seasonal-server');
}

export default function AureraGlobal100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-10-0-seasonal-server" />;
}
