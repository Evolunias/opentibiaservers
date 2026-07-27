import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvp-server-argentina');
}

export default function InfernalOtPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvp-server-argentina" />;
}
