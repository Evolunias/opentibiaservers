import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-seasonal-server-uk');
}

export default function CyntaraSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="cyntara-seasonal-server-uk" />;
}
