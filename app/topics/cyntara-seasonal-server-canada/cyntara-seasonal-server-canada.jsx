import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-seasonal-server-canada');
}

export default function CyntaraSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-seasonal-server-canada" />;
}
