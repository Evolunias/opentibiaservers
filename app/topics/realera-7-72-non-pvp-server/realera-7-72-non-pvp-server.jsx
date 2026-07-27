import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-72-non-pvp-server');
}

export default function Realera772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-72-non-pvp-server" />;
}
