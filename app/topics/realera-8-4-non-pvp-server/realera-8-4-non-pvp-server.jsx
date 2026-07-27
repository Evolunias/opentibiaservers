import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-4-non-pvp-server');
}

export default function Realera84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-4-non-pvp-server" />;
}
