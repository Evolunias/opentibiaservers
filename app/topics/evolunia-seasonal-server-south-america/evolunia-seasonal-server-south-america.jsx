import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-seasonal-server-south-america');
}

export default function EvoluniaSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-seasonal-server-south-america" />;
}
