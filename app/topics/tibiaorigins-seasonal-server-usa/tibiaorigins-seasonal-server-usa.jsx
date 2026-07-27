import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-seasonal-server-usa');
}

export default function TibiaoriginsSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-seasonal-server-usa" />;
}
