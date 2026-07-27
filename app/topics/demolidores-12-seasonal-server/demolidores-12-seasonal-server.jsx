import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-12-seasonal-server');
}

export default function Demolidores12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-12-seasonal-server" />;
}
