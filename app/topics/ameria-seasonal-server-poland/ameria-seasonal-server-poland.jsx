import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-seasonal-server-poland');
}

export default function AmeriaSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ameria-seasonal-server-poland" />;
}
