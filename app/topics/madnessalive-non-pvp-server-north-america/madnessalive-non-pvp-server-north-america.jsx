import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-non-pvp-server-north-america');
}

export default function MadnessaliveNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-non-pvp-server-north-america" />;
}
