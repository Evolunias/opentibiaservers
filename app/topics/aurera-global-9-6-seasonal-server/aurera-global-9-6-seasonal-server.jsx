import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-9-6-seasonal-server');
}

export default function AureraGlobal96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-9-6-seasonal-server" />;
}
