import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-seasonal-server-argentina');
}

export default function RealestaSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realesta-seasonal-server-argentina" />;
}
