import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-seasonal-server-france');
}

export default function CyntaraSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="cyntara-seasonal-server-france" />;
}
