import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-non-pvp-server-argentina');
}

export default function InfernalOtNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-non-pvp-server-argentina" />;
}
