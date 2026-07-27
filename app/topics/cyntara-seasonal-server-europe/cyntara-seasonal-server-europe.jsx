import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-seasonal-server-europe');
}

export default function CyntaraSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="cyntara-seasonal-server-europe" />;
}
