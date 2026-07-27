import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-seasonal-server-argentina');
}

export default function LumineraSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="luminera-seasonal-server-argentina" />;
}
