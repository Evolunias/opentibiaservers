import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-14-non-pvp-server');
}

export default function Madnessalive14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-14-non-pvp-server" />;
}
