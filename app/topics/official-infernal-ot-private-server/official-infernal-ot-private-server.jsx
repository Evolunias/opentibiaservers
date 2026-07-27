import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-infernal-ot-private-server');
}

export default function OfficialInfernalOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-infernal-ot-private-server" />;
}
