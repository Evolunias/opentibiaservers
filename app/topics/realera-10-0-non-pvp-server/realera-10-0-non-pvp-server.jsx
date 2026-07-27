import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-0-non-pvp-server');
}

export default function Realera100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-0-non-pvp-server" />;
}
