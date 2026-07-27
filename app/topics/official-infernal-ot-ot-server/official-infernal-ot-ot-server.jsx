import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-infernal-ot-ot-server');
}

export default function OfficialInfernalOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-infernal-ot-ot-server" />;
}
