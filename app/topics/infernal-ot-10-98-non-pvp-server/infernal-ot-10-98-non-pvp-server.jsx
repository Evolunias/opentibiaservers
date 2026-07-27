import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-98-non-pvp-server');
}

export default function InfernalOt1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-98-non-pvp-server" />;
}
