import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvp-server-north-america');
}

export default function InfernalOtPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvp-server-north-america" />;
}
