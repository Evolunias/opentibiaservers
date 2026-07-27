import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-seasonal-server-usa');
}

export default function CyntaraSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-seasonal-server-usa" />;
}
