import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-seasonal-server-poland');
}

export default function AureraGlobalSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-seasonal-server-poland" />;
}
