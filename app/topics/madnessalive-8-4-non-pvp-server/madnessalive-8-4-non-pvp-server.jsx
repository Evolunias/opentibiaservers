import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-4-non-pvp-server');
}

export default function Madnessalive84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-4-non-pvp-server" />;
}
