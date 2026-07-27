import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-6-seasonal-server');
}

export default function InfernalOt76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-6-seasonal-server" />;
}
