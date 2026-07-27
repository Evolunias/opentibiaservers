import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-4-non-pvp-server');
}

export default function Madnessalive74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-4-non-pvp-server" />;
}
