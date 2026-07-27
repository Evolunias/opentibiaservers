import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-infernal-ot-server');
}

export default function OfficialInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-infernal-ot-server" />;
}
