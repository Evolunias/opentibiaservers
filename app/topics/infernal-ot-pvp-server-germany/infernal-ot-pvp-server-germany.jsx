import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvp-server-germany');
}

export default function InfernalOtPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvp-server-germany" />;
}
