import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-13-non-pvp-server');
}

export default function Realera13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-13-non-pvp-server" />;
}
