import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-seasonal-server-poland');
}

export default function MediviaSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="medivia-seasonal-server-poland" />;
}
