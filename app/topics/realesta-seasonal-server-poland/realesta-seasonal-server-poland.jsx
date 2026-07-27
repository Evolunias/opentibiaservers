import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-seasonal-server-poland');
}

export default function RealestaSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realesta-seasonal-server-poland" />;
}
