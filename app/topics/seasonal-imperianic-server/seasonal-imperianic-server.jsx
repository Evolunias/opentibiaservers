import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-imperianic-server');
}

export default function SeasonalImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-imperianic-server" />;
}
