import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-seasonal-server-south-america');
}

export default function NilotSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-seasonal-server-south-america" />;
}
