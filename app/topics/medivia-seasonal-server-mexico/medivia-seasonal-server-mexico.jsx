import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-seasonal-server-mexico');
}

export default function MediviaSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="medivia-seasonal-server-mexico" />;
}
