import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-seasonal-server-mexico');
}

export default function TibiaoriginsSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-seasonal-server-mexico" />;
}
