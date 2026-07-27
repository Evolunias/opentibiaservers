import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-0-non-pvp-server');
}

export default function Realera80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-0-non-pvp-server" />;
}
