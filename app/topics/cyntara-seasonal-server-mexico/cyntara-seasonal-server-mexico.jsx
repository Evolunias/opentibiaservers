import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-seasonal-server-mexico');
}

export default function CyntaraSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="cyntara-seasonal-server-mexico" />;
}
