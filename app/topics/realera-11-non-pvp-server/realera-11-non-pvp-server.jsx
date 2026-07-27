import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-11-non-pvp-server');
}

export default function Realera11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-11-non-pvp-server" />;
}
