import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-6-seasonal-server');
}

export default function InfernalOt86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-6-seasonal-server" />;
}
