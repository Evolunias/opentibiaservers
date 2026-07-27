import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-seasonal-server-usa');
}

export default function DemolidoresSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-seasonal-server-usa" />;
}
