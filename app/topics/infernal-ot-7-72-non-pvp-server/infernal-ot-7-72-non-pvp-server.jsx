import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-72-non-pvp-server');
}

export default function InfernalOt772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-72-non-pvp-server" />;
}
