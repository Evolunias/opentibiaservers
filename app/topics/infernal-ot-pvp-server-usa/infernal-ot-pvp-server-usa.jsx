import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvp-server-usa');
}

export default function InfernalOtPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvp-server-usa" />;
}
