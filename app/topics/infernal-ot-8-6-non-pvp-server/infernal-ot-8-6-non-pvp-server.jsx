import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-6-non-pvp-server');
}

export default function InfernalOt86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-6-non-pvp-server" />;
}
