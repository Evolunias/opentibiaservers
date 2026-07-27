import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-13-non-pvp-server');
}

export default function Realesta13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-13-non-pvp-server" />;
}
