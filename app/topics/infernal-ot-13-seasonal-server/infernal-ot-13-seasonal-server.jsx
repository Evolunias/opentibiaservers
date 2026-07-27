import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-13-seasonal-server');
}

export default function InfernalOt13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-13-seasonal-server" />;
}
