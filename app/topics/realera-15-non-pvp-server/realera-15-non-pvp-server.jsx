import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-15-non-pvp-server');
}

export default function Realera15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-15-non-pvp-server" />;
}
