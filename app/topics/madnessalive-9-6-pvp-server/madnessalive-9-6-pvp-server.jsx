import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-9-6-pvp-server');
}

export default function Madnessalive96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-9-6-pvp-server" />;
}
