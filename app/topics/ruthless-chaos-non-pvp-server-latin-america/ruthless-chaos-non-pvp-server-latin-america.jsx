import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-non-pvp-server-latin-america');
}

export default function RuthlessChaosNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-non-pvp-server-latin-america" />;
}
