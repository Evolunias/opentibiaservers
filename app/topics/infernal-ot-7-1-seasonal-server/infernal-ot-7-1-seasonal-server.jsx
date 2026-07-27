import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-1-seasonal-server');
}

export default function InfernalOt71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-1-seasonal-server" />;
}
