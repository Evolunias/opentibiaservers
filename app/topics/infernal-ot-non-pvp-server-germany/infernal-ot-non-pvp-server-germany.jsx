import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-non-pvp-server-germany');
}

export default function InfernalOtNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-non-pvp-server-germany" />;
}
