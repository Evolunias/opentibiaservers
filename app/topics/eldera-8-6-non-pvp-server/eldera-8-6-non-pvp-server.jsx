import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-6-non-pvp-server');
}

export default function Eldera86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-6-non-pvp-server" />;
}
