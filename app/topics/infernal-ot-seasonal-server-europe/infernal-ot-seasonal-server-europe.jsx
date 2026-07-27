import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-seasonal-server-europe');
}

export default function InfernalOtSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-seasonal-server-europe" />;
}
