import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-seasonal-server-canada');
}

export default function TibiaoriginsSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-seasonal-server-canada" />;
}
