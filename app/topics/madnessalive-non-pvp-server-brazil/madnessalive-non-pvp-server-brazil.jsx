import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-non-pvp-server-brazil');
}

export default function MadnessaliveNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-non-pvp-server-brazil" />;
}
