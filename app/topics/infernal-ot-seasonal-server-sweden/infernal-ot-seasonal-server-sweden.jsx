import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-seasonal-server-sweden');
}

export default function InfernalOtSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-seasonal-server-sweden" />;
}
