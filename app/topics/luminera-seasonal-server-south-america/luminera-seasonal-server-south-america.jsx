import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-seasonal-server-south-america');
}

export default function LumineraSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-seasonal-server-south-america" />;
}
