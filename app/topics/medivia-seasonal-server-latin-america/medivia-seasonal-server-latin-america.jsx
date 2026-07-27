import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-seasonal-server-latin-america');
}

export default function MediviaSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-seasonal-server-latin-america" />;
}
