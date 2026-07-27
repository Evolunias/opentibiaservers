import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-9-6-seasonal-server');
}

export default function InfernalOt96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-9-6-seasonal-server" />;
}
