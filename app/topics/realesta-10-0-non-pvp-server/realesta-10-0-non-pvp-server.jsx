import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-0-non-pvp-server');
}

export default function Realesta100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-0-non-pvp-server" />;
}
