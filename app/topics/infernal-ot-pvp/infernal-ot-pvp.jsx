import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvp');
}

export default function InfernalOtPvpKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvp" />;
}
