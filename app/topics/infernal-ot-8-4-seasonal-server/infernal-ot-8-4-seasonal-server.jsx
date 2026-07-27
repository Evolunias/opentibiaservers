import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-4-seasonal-server');
}

export default function InfernalOt84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-4-seasonal-server" />;
}
