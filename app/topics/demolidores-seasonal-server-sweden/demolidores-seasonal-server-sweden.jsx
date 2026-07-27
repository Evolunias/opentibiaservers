import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-seasonal-server-sweden');
}

export default function DemolidoresSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="demolidores-seasonal-server-sweden" />;
}
