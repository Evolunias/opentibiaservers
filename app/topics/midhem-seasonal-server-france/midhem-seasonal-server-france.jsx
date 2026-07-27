import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-seasonal-server-france');
}

export default function MidhemSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="midhem-seasonal-server-france" />;
}
