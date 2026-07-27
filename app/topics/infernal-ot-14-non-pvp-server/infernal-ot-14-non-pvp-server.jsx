import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-14-non-pvp-server');
}

export default function InfernalOt14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-14-non-pvp-server" />;
}
