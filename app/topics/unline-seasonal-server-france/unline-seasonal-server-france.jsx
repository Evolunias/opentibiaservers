import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-seasonal-server-france');
}

export default function UnlineSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="unline-seasonal-server-france" />;
}
