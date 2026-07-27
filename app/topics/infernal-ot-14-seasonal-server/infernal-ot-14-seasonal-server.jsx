import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-14-seasonal-server');
}

export default function InfernalOt14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-14-seasonal-server" />;
}
