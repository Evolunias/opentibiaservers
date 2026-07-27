import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-seasonal-server-brazil');
}

export default function MediviaSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="medivia-seasonal-server-brazil" />;
}
