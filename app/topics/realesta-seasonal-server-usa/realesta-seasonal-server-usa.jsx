import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-seasonal-server-usa');
}

export default function RealestaSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realesta-seasonal-server-usa" />;
}
