import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-seasonal-server-brazil');
}

export default function CyntaraSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="cyntara-seasonal-server-brazil" />;
}
