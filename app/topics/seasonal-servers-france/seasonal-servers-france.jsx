import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-servers-france');
}

export default function SeasonalServersFranceKeywordPage() {
  return <StaticKeywordPage slug="seasonal-servers-france" />;
}
