import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-13-pvp-server');
}

export default function Madnessalive13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-13-pvp-server" />;
}
