import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-15-pvp-server');
}

export default function Madnessalive15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-15-pvp-server" />;
}
