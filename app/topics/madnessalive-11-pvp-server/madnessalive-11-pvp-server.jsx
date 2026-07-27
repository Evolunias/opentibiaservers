import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-11-pvp-server');
}

export default function Madnessalive11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-11-pvp-server" />;
}
