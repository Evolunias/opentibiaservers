import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-15-non-pvp-server');
}

export default function InfernalOt15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-15-non-pvp-server" />;
}
