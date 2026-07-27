import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvp-server-poland');
}

export default function InfernalOtPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvp-server-poland" />;
}
