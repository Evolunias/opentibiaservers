import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-seasonal-server-poland');
}

export default function OxygenotSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-seasonal-server-poland" />;
}
