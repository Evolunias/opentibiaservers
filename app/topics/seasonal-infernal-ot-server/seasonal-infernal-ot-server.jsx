import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-infernal-ot-server');
}

export default function SeasonalInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-infernal-ot-server" />;
}
