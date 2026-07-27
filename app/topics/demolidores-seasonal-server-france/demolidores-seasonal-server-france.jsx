import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-seasonal-server-france');
}

export default function DemolidoresSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="demolidores-seasonal-server-france" />;
}
