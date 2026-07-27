import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-non-pvp-server-brazil');
}

export default function InfernalOtNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-non-pvp-server-brazil" />;
}
