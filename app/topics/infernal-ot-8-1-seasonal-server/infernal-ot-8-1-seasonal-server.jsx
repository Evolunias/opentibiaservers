import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-1-seasonal-server');
}

export default function InfernalOt81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-1-seasonal-server" />;
}
