import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-1-pvp-server');
}

export default function Madnessalive81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-1-pvp-server" />;
}
