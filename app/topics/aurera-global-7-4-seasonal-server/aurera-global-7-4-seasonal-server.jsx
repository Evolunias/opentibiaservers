import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-4-seasonal-server');
}

export default function AureraGlobal74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-4-seasonal-server" />;
}
