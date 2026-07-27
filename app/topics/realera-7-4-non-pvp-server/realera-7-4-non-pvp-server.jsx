import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-4-non-pvp-server');
}

export default function Realera74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-4-non-pvp-server" />;
}
