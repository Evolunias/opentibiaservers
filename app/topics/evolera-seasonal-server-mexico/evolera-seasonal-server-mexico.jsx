import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-seasonal-server-mexico');
}

export default function EvoleraSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolera-seasonal-server-mexico" />;
}
