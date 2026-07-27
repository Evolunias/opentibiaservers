import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-seasonal-server-north-america');
}

export default function CyntaraSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-seasonal-server-north-america" />;
}
