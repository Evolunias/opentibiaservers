import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-13-non-pvp-server');
}

export default function Eldera13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-13-non-pvp-server" />;
}
