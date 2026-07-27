import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-infernal-ot-server');
}

export default function NonPvpInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-infernal-ot-server" />;
}
