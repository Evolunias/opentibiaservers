import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-72-non-pvp-server');
}

export default function Thornia772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-72-non-pvp-server" />;
}
