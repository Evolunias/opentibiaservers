import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-seasonal-server');
}

export default function InfernalOt11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-seasonal-server" />;
}
