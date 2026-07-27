import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-0-seasonal-server');
}

export default function InfernalOt100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-0-seasonal-server" />;
}
