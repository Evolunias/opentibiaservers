import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-0-non-pvp-server');
}

export default function Thornia80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-0-non-pvp-server" />;
}
