import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-seasonal-server-usa');
}

export default function MediviaSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="medivia-seasonal-server-usa" />;
}
