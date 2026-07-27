import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-seasonal-server-south-america');
}

export default function TibiaoriginsSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-seasonal-server-south-america" />;
}
