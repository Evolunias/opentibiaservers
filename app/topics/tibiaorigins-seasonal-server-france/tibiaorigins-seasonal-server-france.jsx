import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-seasonal-server-france');
}

export default function TibiaoriginsSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-seasonal-server-france" />;
}
