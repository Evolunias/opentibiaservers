import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-seasonal-server-south-america');
}

export default function DemolidoresSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-seasonal-server-south-america" />;
}
