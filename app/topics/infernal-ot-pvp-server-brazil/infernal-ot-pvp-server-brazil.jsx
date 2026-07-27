import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvp-server-brazil');
}

export default function InfernalOtPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvp-server-brazil" />;
}
