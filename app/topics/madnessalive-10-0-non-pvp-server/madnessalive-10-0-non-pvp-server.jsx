import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-10-0-non-pvp-server');
}

export default function Madnessalive100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-10-0-non-pvp-server" />;
}
