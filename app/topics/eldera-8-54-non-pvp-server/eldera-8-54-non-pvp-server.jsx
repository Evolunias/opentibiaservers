import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-54-non-pvp-server');
}

export default function Eldera854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-54-non-pvp-server" />;
}
