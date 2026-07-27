import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-13-non-pvp-server');
}

export default function InfernalOt13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-13-non-pvp-server" />;
}
