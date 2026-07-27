import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-seasonal-server-mexico');
}

export default function DemolidoresSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="demolidores-seasonal-server-mexico" />;
}
