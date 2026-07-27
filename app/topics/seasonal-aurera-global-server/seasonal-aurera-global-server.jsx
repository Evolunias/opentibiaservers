import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-aurera-global-server');
}

export default function SeasonalAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-aurera-global-server" />;
}
