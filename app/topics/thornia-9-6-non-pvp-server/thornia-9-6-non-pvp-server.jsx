import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-9-6-non-pvp-server');
}

export default function Thornia96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-9-6-non-pvp-server" />;
}
