import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-seasonal-server-poland');
}

export default function TibiaoriginsSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-seasonal-server-poland" />;
}
