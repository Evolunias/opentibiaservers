import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-non-pvp-server-poland');
}

export default function InfernalOtNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-non-pvp-server-poland" />;
}
