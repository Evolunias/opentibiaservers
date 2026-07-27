import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-15-non-pvp-server');
}

export default function Madnessalive15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-15-non-pvp-server" />;
}
