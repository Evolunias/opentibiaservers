import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-15-seasonal-server');
}

export default function InfernalOt15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-15-seasonal-server" />;
}
