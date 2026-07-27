import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-4-non-pvp-server');
}

export default function InfernalOt74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-4-non-pvp-server" />;
}
