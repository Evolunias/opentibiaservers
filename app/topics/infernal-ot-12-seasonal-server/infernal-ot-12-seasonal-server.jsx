import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-12-seasonal-server');
}

export default function InfernalOt12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-12-seasonal-server" />;
}
