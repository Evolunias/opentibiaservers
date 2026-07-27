import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-9-6-non-pvp-server');
}

export default function InfernalOt96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-9-6-non-pvp-server" />;
}
