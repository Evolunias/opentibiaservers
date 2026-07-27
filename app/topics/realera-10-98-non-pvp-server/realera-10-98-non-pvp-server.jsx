import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-98-non-pvp-server');
}

export default function Realera1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-98-non-pvp-server" />;
}
