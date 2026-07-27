import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-13-non-pvp-server');
}

export default function Madnessalive13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-13-non-pvp-server" />;
}
