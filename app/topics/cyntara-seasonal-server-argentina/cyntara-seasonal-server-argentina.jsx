import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-seasonal-server-argentina');
}

export default function CyntaraSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-seasonal-server-argentina" />;
}
