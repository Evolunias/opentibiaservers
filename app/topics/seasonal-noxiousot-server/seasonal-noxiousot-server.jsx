import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-noxiousot-server');
}

export default function SeasonalNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-noxiousot-server" />;
}
