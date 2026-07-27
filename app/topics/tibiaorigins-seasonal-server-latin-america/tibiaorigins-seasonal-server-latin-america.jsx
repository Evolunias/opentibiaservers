import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-seasonal-server-latin-america');
}

export default function TibiaoriginsSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-seasonal-server-latin-america" />;
}
