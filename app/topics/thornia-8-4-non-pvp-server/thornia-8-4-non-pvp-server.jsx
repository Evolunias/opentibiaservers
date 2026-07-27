import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-4-non-pvp-server');
}

export default function Thornia84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-4-non-pvp-server" />;
}
