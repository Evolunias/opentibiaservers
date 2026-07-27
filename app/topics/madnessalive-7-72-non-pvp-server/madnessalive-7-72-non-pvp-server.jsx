import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-72-non-pvp-server');
}

export default function Madnessalive772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-72-non-pvp-server" />;
}
