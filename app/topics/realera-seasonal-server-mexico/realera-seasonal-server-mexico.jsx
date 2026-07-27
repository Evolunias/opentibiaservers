import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-seasonal-server-mexico');
}

export default function RealeraSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realera-seasonal-server-mexico" />;
}
