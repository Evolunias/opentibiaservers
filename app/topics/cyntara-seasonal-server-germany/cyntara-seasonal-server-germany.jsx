import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-seasonal-server-germany');
}

export default function CyntaraSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="cyntara-seasonal-server-germany" />;
}
