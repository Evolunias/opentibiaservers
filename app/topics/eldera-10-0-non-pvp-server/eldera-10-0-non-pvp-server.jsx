import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-0-non-pvp-server');
}

export default function Eldera100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-0-non-pvp-server" />;
}
