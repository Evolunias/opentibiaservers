import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-6-non-pvp-server');
}

export default function Madnessalive86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-6-non-pvp-server" />;
}
