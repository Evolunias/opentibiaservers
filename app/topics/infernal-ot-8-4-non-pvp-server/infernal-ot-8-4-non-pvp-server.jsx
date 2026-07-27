import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-4-non-pvp-server');
}

export default function InfernalOt84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-4-non-pvp-server" />;
}
