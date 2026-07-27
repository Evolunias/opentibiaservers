import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-seasonal-server-mexico');
}

export default function AureraGlobalSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-seasonal-server-mexico" />;
}
