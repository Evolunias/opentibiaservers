import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-seasonal-server-europe');
}

export default function TibiaoriginsSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-seasonal-server-europe" />;
}
