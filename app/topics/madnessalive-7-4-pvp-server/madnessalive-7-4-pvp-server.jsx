import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-4-pvp-server');
}

export default function Madnessalive74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-4-pvp-server" />;
}
