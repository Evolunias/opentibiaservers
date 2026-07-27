import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-seasonal-server-mexico');
}

export default function LumineraSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="luminera-seasonal-server-mexico" />;
}
