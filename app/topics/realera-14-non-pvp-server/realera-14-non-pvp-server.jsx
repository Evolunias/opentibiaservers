import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-14-non-pvp-server');
}

export default function Realera14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-14-non-pvp-server" />;
}
