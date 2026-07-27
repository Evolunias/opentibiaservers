import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-seasonal-server-germany');
}

export default function MediviaSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="medivia-seasonal-server-germany" />;
}
