import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-seasonal-server-south-america');
}

export default function ThorniaSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-seasonal-server-south-america" />;
}
