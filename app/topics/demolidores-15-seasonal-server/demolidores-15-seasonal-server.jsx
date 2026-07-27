import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-15-seasonal-server');
}

export default function Demolidores15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-15-seasonal-server" />;
}
