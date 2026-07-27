import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-seasonal-server-poland');
}

export default function LumineraSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="luminera-seasonal-server-poland" />;
}
