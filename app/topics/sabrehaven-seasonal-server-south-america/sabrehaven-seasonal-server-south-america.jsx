import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-seasonal-server-south-america');
}

export default function SabrehavenSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-seasonal-server-south-america" />;
}
