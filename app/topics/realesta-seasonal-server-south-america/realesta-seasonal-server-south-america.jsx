import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-seasonal-server-south-america');
}

export default function RealestaSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-seasonal-server-south-america" />;
}
