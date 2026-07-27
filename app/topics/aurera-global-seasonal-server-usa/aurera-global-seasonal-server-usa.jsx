import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-seasonal-server-usa');
}

export default function AureraGlobalSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-seasonal-server-usa" />;
}
