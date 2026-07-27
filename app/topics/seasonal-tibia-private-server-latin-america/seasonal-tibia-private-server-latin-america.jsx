import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-tibia-private-server-latin-america');
}

export default function SeasonalTibiaPrivateServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-tibia-private-server-latin-america" />;
}
