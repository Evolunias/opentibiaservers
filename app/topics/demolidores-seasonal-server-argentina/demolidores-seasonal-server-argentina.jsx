import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-seasonal-server-argentina');
}

export default function DemolidoresSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-seasonal-server-argentina" />;
}
