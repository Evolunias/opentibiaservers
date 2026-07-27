import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-11-non-pvp-server');
}

export default function Madnessalive11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-11-non-pvp-server" />;
}
