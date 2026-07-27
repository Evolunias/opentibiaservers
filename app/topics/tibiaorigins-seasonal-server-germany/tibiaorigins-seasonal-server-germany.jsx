import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-seasonal-server-germany');
}

export default function TibiaoriginsSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-seasonal-server-germany" />;
}
