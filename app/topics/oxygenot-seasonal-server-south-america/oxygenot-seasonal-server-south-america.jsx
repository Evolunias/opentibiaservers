import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-seasonal-server-south-america');
}

export default function OxygenotSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-seasonal-server-south-america" />;
}
