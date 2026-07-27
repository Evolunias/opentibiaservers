import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-seasonal-server-north-america');
}

export default function TibiaoriginsSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-seasonal-server-north-america" />;
}
