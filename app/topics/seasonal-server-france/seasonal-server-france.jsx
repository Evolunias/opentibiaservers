import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-france');
}

export default function SeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-france" />;
}
