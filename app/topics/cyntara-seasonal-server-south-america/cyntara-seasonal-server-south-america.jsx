import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-seasonal-server-south-america');
}

export default function CyntaraSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-seasonal-server-south-america" />;
}
