import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-12-non-pvp-server');
}

export default function InfernalOt12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-12-non-pvp-server" />;
}
