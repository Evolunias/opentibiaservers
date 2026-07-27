import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-seasonal-server-brazil');
}

export default function NoxiousotSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-seasonal-server-brazil" />;
}
