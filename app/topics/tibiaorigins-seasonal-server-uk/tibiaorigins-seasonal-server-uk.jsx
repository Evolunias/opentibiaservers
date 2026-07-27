import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-seasonal-server-uk');
}

export default function TibiaoriginsSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-seasonal-server-uk" />;
}
